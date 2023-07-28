import fs from "fs";
import logger from "@config/logger";
import { PDFExtract } from "pdf.js-extract";

const pdfExtract = new PDFExtract();
const options = {};

fs.readdir("../../../public/faturas", function (err, files) {
  for (var i = 0; i < files.length; i++) {
    pdfExtract.extract(`faturas/${files[i]}`, options, (err, data) => {
      const invoice = {
        client: "",
        reference: "",
        date: "",
        energyQuantity: "",
        energyPriceUnit: "",
        energyValue: "",
        injectedQuantity: "",
        injectedPriceUnit: "",
        injectedValue: "",
        sICMSQuantity: "",
        sICMSPriceUnit: "",
        sICMSValue: "",
        publicContributionValue: "",
        total: "",
      };

      if (err) return logger.error(`Erro na leitura de PDF: ${err}`);

      if (data) {
        invoice.energyQuantity = data.pages[0].content[31].str;
        invoice.energyPriceUnit = data.pages[0].content[33].str;
        invoice.energyValue = data.pages[0].content[35].str;

        invoice.injectedQuantity = data.pages[0].content[42].str;
        invoice.injectedPriceUnit = data.pages[0].content[44].str;
        invoice.injectedValue = data.pages[0].content[46].str;

        invoice.sICMSQuantity = data.pages[0].content[53].str;
        invoice.sICMSPriceUnit = data.pages[0].content[55].str;
        invoice.sICMSValue = data.pages[0].content[57].str;

        invoice.publicContributionValue = data.pages[0].content[62].str;

        if (data.pages[0].content[63].str === "Taxa de 2ª via de débito") {
          invoice.total = data.pages[0].content[69].str;
        } else invoice.total = data.pages[0].content[66].str;

        if (parseInt(data.pages[0].content[211].x as unknown as string) === 150) {
          invoice.reference = data.pages[0].content[211].str;
        } else invoice.reference = data.pages[0].content[214].str;

        if (data.pages[0].content[208].str === " ") {
          invoice.date = data.pages[0].content[211].str;
        } else {
          invoice.date = data.pages[0].content[208].str;
        }

        if (parseInt(data.pages[0].content[226].x as unknown as string) === 22) {
          invoice.client = data.pages[0].content[226].str;
        } else if (
          parseInt(data.pages[0].content[228].x as unknown as string) === 22 &&
          data.pages[0].content[228].str !== ""
        ) {
          invoice.client = data.pages[0].content[228].str;
        } else {
          invoice.client = data.pages[0].content[229].str;
        }
        return;
      } else return logger.error(`Erro na leitura de data em PDF: ${err}`);
    });
  }
});
