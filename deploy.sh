eval "$(ssh-agent -s)"
chmod 600 .travis/rr-lsdf-ap-sea.pem
ssh-add .travis/rr-lsdf-ap-sea.pem
git fetch --unshallow
git remote add deploy bitnami@3.0.229.216:roydenrego.git
git push deploy master