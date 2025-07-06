cd C:\Users\Derek\Downloads\Jp-Server
Remove-Item -Recurse -Force "C:\Users\Derek\Downloads\Jp-Server"
git clone --single-branch --branch Test https://github.com/dwbacon/Jp-Server.git
cd C:\Users\Derek\Downloads\Jp-Server
npm start 
