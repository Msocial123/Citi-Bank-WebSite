#Pulling the Base Image from the hub.docker
FROM ubuntu:latest 
# Set the WorkDir 
WORKDIR /app 
# Uodate the ubuntu os 
RUN apt-get update -y
# Install the apache2 server
RUN apt-get install apache2 -y 
#Copy the code from local to inside the webserver default location
COPY . /var/www/html
#Start Apache Server
ENTRYPOINT apachectl -D FOREGROUND