const keep_moving_sketch = ( sketch ) => {

    let sketch_width, sketch_height, canvas_container_element;
    let x, y, color_a, color_b;
    let available_colors = [ 'f7e8f6', 'f7e8f6', 'e5b0ea', 'bd83ce' ];

    sketch.preload = () => {
        canvas_container_element = document.getElementById('canvas-container-a');
    };

    sketch.setup = () => {
        sketch.setDimensions();

        let placeholder_img = document.querySelector('#canvas-container-a img');
        if ( placeholder_img ) {
            placeholder_img.remove();
        }

        x = 0;
        y = sketch.random( sketch_height * .2, sketch_height * .3 );
        sketch.get_next_colors();

        sketch.createCanvas(sketch_width, sketch_height);
        sketch.frameRate(80);
    };

    sketch.draw = () => {
        if ( x <= sketch_width ) {
            let inter = sketch.map( x, 0, sketch_width, 0, 1 );
            let color = sketch.lerpColor( color_a, color_b, inter );
            sketch.stroke( color );
            sketch.fill( color );

            sketch.ellipse( x, y, sketch_height * .012, sketch_height * .012 );
            x += sketch_height * .003;
            y = sketch.random( y - sketch_height * .007, y + sketch_height * .007 );

            if ( y >= sketch_height ) y = sketch_height;
            if ( y <= 0 ) y = 0;
        } else {
            x = 0;
            y = sketch.random( 0, sketch_height );
            sketch.get_next_colors();
        }
    };

    sketch.get_next_colors = () => {
        if ( !color_a ) {
            color_a = sketch.color( '#' + sketch.random( available_colors ) );
        } else {
            color_a = color_b;
        }
        color_b = sketch.color( '#' + sketch.random( available_colors ) );
    };

    sketch.windowResized = () => {
        if ( sketch_width !== canvas_container_element.clientWidth ) {
            sketch.setDimensions();
            sketch.resizeCanvas( sketch_width, sketch_height );
            x = 0;
            y = sketch.random( sketch_height * .2, sketch_height * .3 );
            sketch.clear();
        }
    };

    sketch.setDimensions = () => {
        sketch_width = canvas_container_element.clientWidth;
        sketch_height = sketch_width * (2/3);
    };

};

new p5(keep_moving_sketch, 'canvas-container-a');
