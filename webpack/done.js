
// https://github.com/webpack/webpack/issues/708

export default function()
{
  this.plugin("done", function(stats)
  {
    if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1)
    {
      console.log(stats.compilation.errors);
      process.exit(1);
    }
    // ...
  });
}
