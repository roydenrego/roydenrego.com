eval "$(ssh-agent -s)"
pwd
openssl aes-256-cbc -K $encrypted_26b4962af0e7_key -iv $encrypted_26b4962af0e7_iv -in rr-lsdf-ap-sea.pem.enc -out rr-lsdf-ap-sea.pem -d
ls
chmod 600 rr-lsdf-ap-sea.pem
ssh-add rr-lsdf-ap-sea.pem
git fetch --unshallow
git remote add deploy $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_REP.git
git push deploy master