//Download pdf file stored in local memory
import resumeFile from '../docs/LarryYoungResumeSept2022.pdf'

let fileURL = resumeFile;



const downloadFile = () => {
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.type = 'application/pdf'
    downloadLink.href = fileURL
    downloadLink.setAttribute('target', 'blank_')
    downloadLink.download = 'LarryYoung_Resume';        
}

export default downloadFile;