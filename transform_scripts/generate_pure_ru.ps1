rd pureru -r >$null
yarn --cwd ./confluence-to-markdown start ../LSFUSRU ../pureru

python rename_md_files.py docusaurustestru/docs/index.md docusaurustest/docs/index.md settings_ru.json pureru/LSFUSRU/

