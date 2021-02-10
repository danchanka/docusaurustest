rd docusaurustest/docs -r >$null
robocopy ./pure/LSFUS ./docusaurustest/docs /e /copyall >$null

python transform_md.py docusaurustest/docs/

python create_sidebar.py docusaurustest/docs/index.md docusaurustest/sidebars.js

yarn --cwd ./docusaurustest/ start

