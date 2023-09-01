FROM dpage/pgadmin4:latest

COPY servers.json /var/lib/pgadmin/servers.json
COPY pgpass /var/lib/pgadmin/pgpass

USER root
RUN chmod 600 /var/lib/pgadmin/pgpass
