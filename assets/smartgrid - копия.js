const smartgrid = require('smart-grid');

const settings = {
    outputStyle: 'scss',
    columns: 10,
    offset: '20px',
    container: {
        maxWidth: '808px',
        fields: '20px'
    },
    breakPoints: {
        medium: {
            width: "767px"
        },
        Xsmall: {
            width: "640px"
        },
        small: {
            width: "479px"
        }
    }
};

smartgrid('./assets/precss', settings);

/* вызов генерации в командной строке ============= node smartgrid.js ================= */