curl -o "/tmp/session-manager-plugin.pkg" "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/mac/session-manager-plugin.pkg"


pkgutil --expand /tmp/session-manager-plugin.pkg /tmp/ssmplugin


cp /tmp/ssmplugin/sessionmanagerplugin.pkg/Payload ~/bin/session-manager-plugin
chmod +x ~/bin/session-manager-plugin


mkdir -p ~/bin



echo 'export PATH=$HOME/bin:$PATH' >> ~/.zshrc  # If using Zsh (default on macOS)
echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc  # If using Bash
source ~/.zshrc  # Reload for Zsh
source ~/.bashrc  # Reload for Bash


session-manager-plugin --version


aws ssm start-session --target i-07a7797becf4fdac4





curl -o session-manager-plugin.pkg "https://s3.amazonaws.com/session-manager-downloads/plugin/latest/mac/session-manager-plugin.pkg"




mkdir -p ~/ssmplugin
pkgutil --expand session-manager-plugin.pkg ~/ssmplugin


cd ~/ssmplugin
tar -xvf Payload

mkdir -p ~/bin
mv session-manager-plugin ~/bin/
chmod +x ~/bin/session-manager-plugin


echo 'export PATH=$HOME/bin:$PATH' >> ~/.zshrc
source ~/.zshrc  # For zsh users

echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

session-manager-plugin --version




DEM-FF20RFW3CM :: ~/ssmplugin » tar -xvf Payload
x .
x ./usr
x ./usr/local
x ./usr/local/sessionmanagerplugin
x ./usr/local/sessionmanagerplugin/LICENSE
x ./usr/local/sessionmanagerplugin/bin
x ./usr/local/sessionmanagerplugin/bin/session-manager-plugin
x ./usr/local/sessionmanagerplugin/RELEASENOTES.md
x ./usr/local/sessionmanagerplugin/NOTICE
x ./usr/local/sessionmanagerplugin/README.md
x ./usr/local/sessionmanagerplugin/seelog.xml.template
x ./usr/local/sessionmanagerplugin/THIRD-PARTY
x ./Library
x ./Library/LaunchDaemons
x ./Library/LaunchDaemons/SessionManagerPlugin.plist
DEM-FF20RFW3CM :: ~/ssmplugin » ls
Bom         Library     PackageInfo Payload     usr
DEM-FF20RFW3CM :: ~/ssmplugin »








mv ~/ssmplugin/usr/local/sessionmanagerplugin/bin/session-manager-plugin ~/bin/

chmod +x ~/bin/session-manager-plugin

export PATH=$HOME/bin:$PATH
echo 'export PATH=$HOME/bin:$PATH' >> ~/.zshrc  # If using zsh
echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc  # If using bash


source ~/.zshrc  # For zsh
source ~/.bashrc  # For bash

session-manager-plugin --version