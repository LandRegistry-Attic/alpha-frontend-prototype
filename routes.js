module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {

      res.render('index',
                {'assetPath' : assetPath});
      
    });

    app.get('/sample', function (req, res) {
      
      res.render('sample',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/hello-world', function (req, res) {
      res.render('examples/hello_world', {'message' : 'Hello world'});
    });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page_level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });    
    });

    app.get('/examples/template-partial-areas', function (req, res) {

      res.render('examples/template_partial_areas',
                {'assetPath' : assetPath});
      
    });

    /* Elements example pages */

    app.get('/examples/elements/grid-layout', function (req, res) {
      res.render('examples/elements/grid_layout', {'assetPath' : assetPath });    
    });

    app.get('/examples/elements/typography', function (req, res) {
      res.render('examples/elements/typography', {'assetPath' : assetPath });    
    });
    
    app.get('/examples/elements/forms', function (req, res) {
      res.render('examples/elements/forms', {'assetPath' : assetPath });    
    });

  }
};
