const sink_sketch = ( sketch ) => {

    let sketch_width, sketch_height, canvas_container_element;
    let stroke_length_range;
    let available_colors = [ 'f7e8f6', 'f7e8f6', 'e5b0ea', 'bd83ce' ];

    sketch.preload = () => {
        canvas_container_element = document.getElementById('canvas-container-c');
    };

    sketch.setup = () => {
        sketch.setDimensions();

        let placeholder_img = document.querySelector('#canvas-container-c img');
        if ( placeholder_img ) {
            placeholder_img.remove();
        }

        sketch.createCanvas(sketch_width, sketch_height);
        sketch.frameRate(80);
    };

    sketch.draw = () => {
        let x, y, x2, y2;

        x = sketch.random( -stroke_length_range, sketch_width );
        y = sketch.random( -stroke_length_range, sketch_height );
        x2 = sketch.random( x-stroke_length_range, x+stroke_length_range );
        y2 = sketch.random( y-stroke_length_range, y+stroke_length_range );

        if ( sketch_width > 1000 ) {
            sketch.strokeWeight( sketch.random( sketch_width/1000, sketch_width/2000 ) );
        } else {
            sketch.strokeWeight( sketch.random( .3, 1.8) );
        }

        let inter = sketch.map( x, 0, sketch_width, 0, 1 );
        let c = sketch.lerpColor( sketch.color( '#' + sketch.random( available_colors )), sketch.color( '#' + sketch.random( available_colors )), inter );
        sketch.stroke( c );
        sketch.line(x, y, x2, y2);
    };

    sketch.windowResized = () => {
        if ( sketch_width !== canvas_container_element.clientWidth ) {
            sketch.setDimensions();
            sketch.resizeCanvas( sketch_width, sketch_height );
        }
    };

    sketch.setDimensions = () => {
        sketch_width = canvas_container_element.clientWidth;
        stroke_length_range = sketch_width/30;
        sketch_height = sketch_width * (2/3);
    };

};

new p5(sink_sketch, 'canvas-container-c');
