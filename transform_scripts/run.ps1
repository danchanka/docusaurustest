rd docusaurustest/docs -r >$null
yarn --cwd ./confluence-to-markdown start ../LSFUS ../docusaurustest/docs
robocopy ./docusaurustest/docs/LSFUS ./docusaurustest/docs /e /copyall /move >$null
robocopy ./LSFUS/download ./docusaurustest/docs/download /e /copyall >$null
xcopy CodeSample.mdx docusaurustest\docs /Y >$null

python build_maps.py settings.json

python transform_md.py settings.json

python create_sidebar.py docusaurustest/docs/index.md docusaurustest/sidebars.js

yarn --cwd ./docusaurustest/ start

