import pdfjs from 'pdfjs-dist';
import resumeFile from '../docs/LarryYoungResumeSept2022.pdf'

//GLOBAL VARIABLES

let pdfDoc = null;
let currentPage = 1;
let fileURL = resumeFile;

//HTML DECLARATIONS
    
let resume = document.getElementById('resume');
let pdfMenuBar = document.getElementById('pdfMenuBar');
let canvas = document.getElementById('pdfViewport');
let prevPageBtn = document.getElementById('prevPageBtn');
let nextPageBtn = document.getElementById('nextPageBtn');
let closeBtn = document.getElementById('close');

//SETUP PDF WORKER

if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
    const WORKER_URL = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
    pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_URL;
}

const getPDF = () => {  
    
//SETUP CONTROLLER TO SWITCH PAGES

    const PageController = {
        next() {
            currentPage++;
            renderPage();
            console.log('NEXT PAGE!')
            console.log(currentPage)
        },

        prev() {
            currentPage--;
            renderPage();
            console.log('PREV PAGE!')
            console.log(currentPage)
        }
    }

    //SETUP BUTTONS

    prevPageBtn.addEventListener('click', () => {
        PageController.prev();
    })

    nextPageBtn.addEventListener('click', () => {
        PageController.next();
    })

    closeBtn.addEventListener('click', () => {
        resume.style.overflowX = 'hidden';
        canvas.style.opacity = 0;
        pdfMenuBar.style.opacity = 0 
        closeBtn.style.opacity = 0     
        
        setTimeout(() => {
            canvas.style.display = 'none';                
        }, 1000)

    })
    
    //DEFINE FUNCTION TO RENDER PAGES DYNAMICALLY

    const renderPage = () => {
        pdfDoc.getPage(currentPage).then(page => {
            console.log(page);
            console.log('got page..')

            //SETUP CANVAS

            let viewport = page.getViewport({scale: 1.5})
            canvas.height = 1600
            canvas.width = 1400  
            console.log(canvas);
            let ctx = canvas.getContext('2d')

            //SETUP RENDER CONTEXT

            let renderContext = {
                canvasContext: ctx,
                viewport
            }

            //RENDER PAGE

            page.render(renderContext);
            canvas.style.display = "flex";
            
            pdfMenuBar.style.opacity = '1'
            closeBtn.style.opacity = '1'
            setTimeout(() => {
                canvas.style.opacity = '1';
                resume.style.overflowX = 'scroll';
            }, 100)
        })
    }

    
   
   
    //GET DOCUMENT
    pdfjsLib.getDocument(fileURL).promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;
        console.log(pdfDoc); 
               

        //NOW WE CAN CALL DYNAMIC RENDER PAGE FUNCTION INSIDE DOC PROMISE

        renderPage(); 

    }) 

    
}


export default getPDF


