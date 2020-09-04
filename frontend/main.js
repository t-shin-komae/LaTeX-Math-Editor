var editor = ace.edit("editor",{mode:"ace/mode/tex",selectionStyle:"text"});
editor.setTheme('ace/theme/monokai');
editor.setFontSize(14);
editor.getSession().setUseWrapMode(true)
editor.on("change",function(e){
    let text = editor.getSession().getValue();
    katex.render(text,document.getElementById("math-view"),{displayMode:true,throwOnError:false})
});