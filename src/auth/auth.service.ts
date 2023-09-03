import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';

import { Account } from '@entity/account.entity';
import { AccountStatus } from '@enums/account-status.enum';
import { RegisterDto } from '@module/auth/dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(registerDto: RegisterDto): Promise<any> {
    const hashedPassword = await this.hashPassword(registerDto.password);
    const newAccount = this.createAccount(registerDto, hashedPassword);
    return await this.saveAccount(newAccount);
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  private createAccount(dto: RegisterDto, hashedPassword: string): Account {
    const newAccount = new Account();
    newAccount.username = dto.username;
    newAccount.password = hashedPassword;
    newAccount.roleId = dto.roleId;
    newAccount.fullName = dto.fullName;
    newAccount.restaurantId = dto.restaurantId;
    newAccount.brandId = dto.brandId;
    newAccount.phoneNumber = dto.phoneNumber;
    newAccount.gender = dto.gender;
    newAccount.address = dto.address;
    newAccount.status = AccountStatus.UNCONFIRMED;
    newAccount.tokenDate = dto.tokenDate;
    return newAccount;
  }

  private async saveAccount(account: Account): Promise<any> {
    const savedAccount = await this.accountRepository.save(account);
    if (!savedAccount) {
      throw new BadRequestException('Registration failed');
    }
    return this.generateToken(savedAccount);
  }

  private generateToken(account: Account): {
    access_token: string;
    token_date: Date;
  } {
    const payload = { sub: account.id, username: account.username };
    return {
      access_token: this.jwtService.sign(payload),
      token_date: new Date(),
    };
  }
}

export interface RegisterResponse {
  access_token: string;
  token_date: Date;
}
