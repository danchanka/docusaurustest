rd docusaurustest/docs -r >$null
robocopy ./pure/LSFUS ./docusaurustest/docs /e /copyall >$null
robocopy ./LSFUS/download ./docusaurustest/docs/download /e /copyall >$null
xcopy CodeSample.mdx docusaurustest\docs /Y >$null

python transform_md.py docusaurustest/docs/

python create_sidebar.py docusaurustest/docs/index.md docusaurustest/sidebars.js

yarn --cwd ./docusaurustest/ start

