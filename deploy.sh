eval "$(ssh-agent -s)"
pwd
ls
chmod 600 rr-lsdf-ap-sea.pem
ssh-add rr-lsdf-ap-sea.pem
git fetch --unshallow
git remote add deploy $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_REP.git
git push deploy master