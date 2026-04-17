"use client";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface DownloadPDFProps {
  targetId: string;
  fileName?: string;
  buttonText?: string;
  buttonClassName?: string;
}

export default function DownloadPDF({ 
  targetId, 
  fileName = "catalogue-cotech-services.pdf",
  buttonText = "Télécharger le catalogue PDF",
  buttonClassName = ""
}: DownloadPDFProps) {
  const generatePDF = async () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    // Afficher un chargement
    const originalDisplay = element.style.display;
    element.style.display = "block";
    
    try {
      // Convertir l'élément HTML en canvas
      const canvas = await html2canvas(element, {
        scale: 2, // Meilleure qualité
        backgroundColor: "#ffffff",
        logging: false,
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // Largeur A4 en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(fileName);
    } catch (error) {
      console.error("Erreur lors de la génération du PDF:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      element.style.display = originalDisplay;
    }
  };

  return (
    <button onClick={generatePDF} className={buttonClassName}>
      📄 {buttonText}
    </button>
  );
}