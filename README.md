# plan-t-API
Plant data API to present detailed data about plants that have been identified by the application. After the plant image is identified, our application will display the plant description information

# Architecture API
developing APIs using Javascript and the Hapi framework. After that, we upload this API to Github and deploy it on the compute engine. Firewall is used to allow access to port 7000. So our API is publicly accessible.

# Deploy the API on google cloud
## VPC Network
1. login to GCP
2. Open Navigation menu, choose VPC Network, and then open Firewall page
3. Make a firewall configuration with target tag set to web-server, source IPv4 ranges set to 0.0.0.0/0 and allow custom TCP port 7000 than Press Create button
## compute engine
1. Open Navigation menu and then choose Compute Engine
2. Region : asia-southeast1
3. Zone : asia-southeast1-a
4. Machine type : n1-standard-1 (1 vCPU, 3.75 GiB memory)
5. Open Networking, Disks, Security, Management, Sole-Tenancy menu
6. Under Networking section, add app-server as target tags
7. Click Create button
## SSH
1. git --version
2. git clone https://github.com/galangadiyoga/notes-app-backend
3. cd notes-app-backend
4. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
5. exit
6. open ssh again
7. nvm install v16.14.0
8. cd notes-app-backend
9. npm install
10. npm run start-prod
11. cd ..
12. npm install -g pm2
13. cd notes-app-backend
14. pm2 start npm --name "plant-API" -- run "start-prod"
