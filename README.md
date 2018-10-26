# SqlToMarkdown
convert mysql table structures to markdown table

## install

```
npm i -g sqltomarkdown
```

## usage

convert mysql table structures to markdown table
```
sqltomarkdown -h localhost -u user -p password --database mydatabase -o sql.md
```

show help
```
sqltomarkdown --help
```

## help

```
Usage: index [options]

Options:
  -V, --version          output the version number
  -h, --host [s]         database host，default："localhost"
  -u, --user [s]         database user，default："root"
  -p, --password [s]     database password，default：""
  --database <s>         database name
  -o, --output-file [s]  output file name，default："sql.md"
  -h, --help             output usage information
```
