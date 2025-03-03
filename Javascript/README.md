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



100 3920k  100 3920k    0     0   585k      0  0:00:06  0:00:06 --:--:--  748k
DEM-FF20RFW3CM :: ~ » pkgutil --expand /tmp/session-manager-plugin.pkg /tmp/ssmplugin
DEM-FF20RFW3CM :: ~ » cp /tmp/ssmplugin/sessionmanagerplugin.pkg/Payload ~/bin/session-manager-plugin
cp: /tmp/ssmplugin/sessionmanagerplugin.pkg/Payload: No such file or directory
DEM-FF20RFW3CM :: ~ » cd /tmp/ssmplugin                                                                                                                                                                 1 ↵
DEM-FF20RFW3CM :: /tmp/ssmplugin » ls
Bom         PackageInfo Payload
DEM-FF20RFW3CM :: /tmp/ssmplugin »
DEM-FF20RFW3CM :: /tmp/ssmplugin » cd
DEM-FF20RFW3CM :: ~ » mkdir -p ~/bin
DEM-FF20RFW3CM :: ~ » cp /tmp/ssmplugin/sessionmanagerplugin.pkg/Payload ~/bin/session-manager-plugin
cp: /tmp/ssmplugin/sessionmanagerplugin.pkg/Payload: No such file or directory
