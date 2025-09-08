icons  
https://icon-sets.iconify.design/ri/


```js
pages.create(() => {
    // build
    // render page
})
```


# TODO
- caddy: serve 404
- server: reboot (docker + swap)
- README: how to add swap on reboot
- Docker: restart always



## Installation

### Clone the repo
#### 1. Connect to the instance
```sh
ssh username@host
```

#### 2. Generate SSH key
```sh
cd ~/.ssh # create directory if not exists
ssh-keygen -t ed25519 -C "username@mail.com" # use your github email
# filename: github (or anything else)
# empty passphrase
```

#### 3. Make the key authorized
```shell
cat github.pub >> authorized_keys
```

#### 4. Create SSH config
```sh
vi config
```
Paste the following
```shell
Host github.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/github # path to private key
```

#### 5. Add the key to GitHub
```shell
vi ~/.ssh/github.pub
```
Copy the contents, go to https://github.com/dmtkpv/cinlix/settings/keys and add the deploy key.

#### 6. Clone the repo
```
git clone git@github.com:dmtkpv/cinlix.git
sudo mv vacature /srv
```


### Add swap

```shell
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

### Install Docker

```shell
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```


### Run the app
```shell
cd /srv/cinlix
cp example.env .env
vi .env # set variable values
docker compose up prod --build -d
```



