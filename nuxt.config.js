export default {
    components: true,
    plugins: [
        // { src: '~/plugins/ckeditor', ssr: false },
        // { src: '~/plugins/ckeditor/insertText.js', mode: 'client' }
    ],

    head:  {
        title: "Editor Customization",
        meta: [
            { charset: 'utf-8' },
        ],
        link: [
            { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" }
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js' }
        ]
    }
}