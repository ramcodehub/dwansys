import Overview from '../../../assets/images/Usecases-images/Healthcare and Life Sciences HLS/Genomics and Precision Medicine2.jpeg';
import Image from '../../../assets/images/UsecasesRealWorld/GenomicsAndPrecisionMedicine.png';

const GenomicsAndPrecisionMedicineData = {
  sections: [
    {
      type: 'hero',
      props: {
        heading: 'Genomics and Precision Medicine',
        content:
          'AI is transforming healthcare by enabling highly personalized treatment plans that account for genetic, clinical, and lifestyle data.',
      },
    },
    {
      type: 'overview',
      props: {
        heading: 'Overview',
        content:
          'AI empowers genomics and precision medicine by decoding genetic data, identifying hereditary risks, and recommending targeted therapies. By integrating genomic insights with clinical and lifestyle data, healthcare providers can deliver personalized treatments that improve outcomes and reduce trial-and-error in care.',
        image: Overview,
      },
    },
    {
      type: 'real-world-example',
      props: {
        content:
          'AI-powered platforms in oncology predict which cancer therapies will deliver the best outcomes based on a patient’s unique genetic markers, improving survival rates and reducing side effects.',
        backgroundImage: Image,
      },
    },
    {
      type: 'key-applications',
      props: {
        Applications: [
          {
            icon: 'bi bi-activity',
            heading: 'Genomic Data Analysis',
            content:
              'AI interprets DNA sequences to identify mutations linked to diseases and hereditary risks.',
          },
          {
            icon: 'bi bi-person-check',
            heading: 'Personalized Treatment',
            content:
              'AI recommends therapies tailored to each patient’s genetic profile and medical history.',
          },
          {
            icon: 'bi bi-scissors',
            heading: 'CRISPR Gene Editing',
            content:
              'AI supports the design of precise CRISPR strategies for treating genetic disorders.',
          },
        ],
      },
    },
  ],
};

export default GenomicsAndPrecisionMedicineData;
