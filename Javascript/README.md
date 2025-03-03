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
