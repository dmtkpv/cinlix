# Cinlix
**Technologies**: Docker, PNPM, Caddy, PostgreSQL, Directus CMS, Nuxt SSG  
Icons: https://icon-sets.iconify.design/ri/

## TODO
- server: reboot (docker + swap)
- README: how to add swap on reboot
- Docker: restart always


## PNPM Scripts

| Script                                           | Description                                                  |
|--------------------------------------------------|--------------------------------------------------------------|
| `pnpm database seed`                             | Seed the database                                            |
| `pnpm database migrate:up`                       | Apply migration                                              |
| `pnpm database migrate:down`                     | Undo migration                                               |
| `pnpm database migrate:latest`                   | Apply all migrations                                         |
| `pnpm directus bootstrap`                        | Install Directus system tables                               |
| `pnpm directus serve`                            | Run Directus                                                 |
| `pnpm directus build`                            | Build Directus extensions                                    |
| `pnpm directus watch`                            | Build Directus extensions and rebuild when something changes |
| `pnpm website dev`                               | Run website in development mode                              |
| `pnpm website build`                             | Build website                                                |


## Development

### Installation
```shell

# clone the repo
git clone https://github.com/dmtkpv/cinlix.git

# edit env variables
cd cinlix
cp example.env .env
vi .env # change CADDY_PORT to 49023

# run containers
docker compose up dev --build

# run directus (in a new terminal tab)
docker compose exec dev sh
pnpm install
pnpm directus build
pnpm directus bootstrap
pnpm database migrate:latest
pnpm database seed
pnpm directus serve 

# run website (in a new terminal tab)
docker compose exec dev sh
pnpm website dev

# Open in browser
# http://localhost:49021 - Directus CMS
# http://localhost:49022 - Website (development version)
# http://localhost:49023 - Website (production version)
```

### Updating database  
- create a migration in `./packages/database/migration`
- apply migration by running `pnpm database migrate:up`
- configure Directus field in `./packages/database/directus/collections`
- apply Directus configuration by running `pnpm database seed`


## Installation on VPS

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



