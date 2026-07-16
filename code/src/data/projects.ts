import { Project } from '../types';

export const bachelorProjects: Project[] = [
  {
    id: 0,
    title: 'Projeto FEUP Submissions Platform',
    description:
      'Full-stack web platform built to replace the outdated submission system used by the Projeto FEUP course (~1400 students per edition). Now actively used by FEUP - source code is not publicly available for privacy and safety reasons.',
    media: 'https://github.com/joanapimenta27/PI_report/raw/641dd7ed707235dd6c1b3eab9fdafeee108510e0/login.png', 
    mediaType: 'image',
    category: 'web',
    degree: 'bachelor',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'NextAuth', 'Nodemailer'],
    demoLink:'https://github.com/joanapimenta27/PI_report/blob/641dd7ed707235dd6c1b3eab9fdafeee108510e0/PI_relatorio.pdf'
  },
  {
    id: 1,
    title: 'Mobile Games in Unity',
    description: "Created a mobile game using Unity and C#, I'm exploring game development concepts and mechanics. The game I'm working on so I can learn some basics is called Flap Away. This project is still in progress.",
    media: 'https://github.com/joanapimenta27/My_Portfolio/raw/main/images/flap_away.png',
    mediaType: 'image',
    category: 'game',
    degree: 'bachelor',
    technologies: ['Unity', 'C#', 'Mobile Development'],
    demoLink: 'https://github.com/joanapimenta27/Flap_Away/raw/main/flap_away_video.mp4',
  },
  {
    id: 2,
    title: 'Web Development Projects',
    description: 'I have worked in Web Development in courses like LTW and LBAW. Here are some of my projects and learning opportunities.',
    media: 'https://github.com/joanapimenta27/Lbaw/raw/main/lbaw.mp4',
    mediaType: 'video',
    category: 'web',
    degree: 'bachelor',
    technologies: ['Laravel', 'PHP', 'MySQL', 'HTML Blade', 'CSS', 'JavaScript', 'HTML', 'SQL'],
    codeLinks: [
      'https://github.com/joanapimenta27/Lbaw_Flick',
      'https://github.com/joanapimenta27/LTW_Reluv',
    ],
  },
  {
    id: 3,
    title: 'Some of my favorites',
    description: 'Here are some of my favorite projects. I liked projects that involved creating games in courses like AI, LDTS, PFL and LCOM.',
    media: 'https://github.com/joanapimenta27/AI_cake_sort/raw/main/cake2.mp4',
    mediaType: 'video',
    category: 'more',
    degree: 'bachelor',
    technologies: ['AI Project in Python', 'PFL Project in Prolog', 'LDTS Project in Java', 'LCOM Project in C'],
    codeLinks: [
      'https://github.com/joanapimenta27/AI_cake_sort',
      'https://github.com/joanapimenta27/Blutentanz',
      'https://github.com/joanapimenta27/LCOM_project',
      'https://github.com/joanapimenta27/LDTS_bombergame',
    ],
  },
];

export const masterProjects: Project[] = [
  {
    id: 4,
    title: 'WAVE-GUIDE: RAG Assistant for ROS2 Robotics (Group Project)',
    description: 'Full-stack conversational assistant that unifies ROS 2, Waveshare UGV Rover, Gazebo, and Nav2 documentation into a single chat interface.',
    media: 'https://github.com/Proenca13/TRI-Chatbot/raw/develop/Video.mp4',
    mediaType: 'video',
    category: 'AI',
    degree: 'master',
    technologies: ['Next.js', 'FastAPI', 'Qdrant', 'PostgreSQL', 'Docker', 'RAG', 'Llama 3', 'Python'],
    codeLinks: ['https://github.com/Proenca13/TRI-Chatbot'],
  },
  {
    id: 5,
    title: 'AI & Society: Auditing Bias and Deepfakes',
    description:
      'Two projects exploring the societal impact of AI. The main project audits political exposure bias in news recommendation using the MIND dataset. Also includes a group essay on how deepfake technology threatens democratic processes.',
    media: 'https://github.com/joanapimenta27/IAS_Project/raw/main/report_preview.png',
    mediaType: 'image',
    imagePosition: 'top',
    category: 'AI and Society',
    degree: 'master',
    technologies: ['Python', 'Jupyter', 'Pandas', 'NumPy', 'BERT', 'MIND Dataset', 'scikit-learn'],
    codeLinks: ['https://github.com/joanapimenta27/IAS_Project', 'https://medium.com/@brunofrtmoreira/deepfakes-and-democracy-ec0bed164008'],
  },
  {
    id: 9,
    title: 'Deepfake Detection & Face Generation (Group Project)',
    description:
      'Two-part deep learning project on the DeepFakeFace dataset. Discriminative: compared 5 architectures (NN, ResNet34, EfficientNet, Xception, ViT-B16) with frozen vs full fine-tuning. Generative: iteratively built DCGAN → Improved DCGAN → WGAN-GP → DDPM, with the diffusion model (FID 64.4) outperforming the best GAN (FID 132.9) by a large margin.',
    media: 'https://github.com/Proenca13/Deep_Learning_Project/raw/main/experiment_logs/generators/DDPM_v4/images/final_ddpm_samples.png', // replace with a Grad-CAM or generated faces screenshot
    mediaType: 'image',
    category: 'AI',
    degree: 'master',
    technologies: ['Python', 'PyTorch', 'ResNet34', 'EfficientNet', 'Xception', 'ViT', 'DCGAN', 'WGAN-GP', 'DDPM', 'U-Net', 'MTCNN', 'Grad-CAM'],
    codeLinks: ['https://github.com/Proenca13/Deep_Learning_Project'],
  },
  {
    id: 7,
    title: 'Predicting Cardiac Diseases in Children (Group Project)',
    description:
      'Full data science pipeline applied to real pediatric cardiology clinical records. After rigorous data cleaning and EDA, feature selection identified heart murmur (SOPRO) as the dominant predictor. Five ML models were compared - Logistic Regression, Random Forest, XGBoost, SVM, and MLP - achieving ROC-AUC > 0.91 with the top-8 features.',
    media: 'https://github.com/Proenca13/Project_FDS/raw/27dbe3a1ffafe4f172afa1e0278e413c3a73367a/capa_fds.png', 
    mediaType: 'image',
    category: 'data science',
    degree: 'master',
    technologies: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn'],
    codeLinks: ['https://github.com/Proenca13/Project_FDS'],
  },
  {
    id: 8,
    title: 'Forecasting Global Temperature Anomalies (Group Project)',
    description:
      'Time series analysis of 175 years of global temperature anomalies (HadCRUT5). Compared AR, MA, ARMA, and a full ARIMA(p,1,q) grid, selecting models by both point accuracy and interval calibration (Winkler score). Best model: ARIMA(2,1,0). Includes 10-year-ahead climate projections.',
    media: 'https://github.com/Proenca13/Project_STP/raw/5ab811c77fc013315cdd8353b5dc05aeb3dad467/stp_preview.png', 
    mediaType: 'image',
    imagePosition: 'top',
    category: 'data science',
    degree: 'master',
    technologies: ['Python', 'statsmodels', 'ARIMA', 'ARMA', 'Holt Smoothing', 'LOWESS', 'Matplotlib', 'Pandas'],
    codeLinks: ['https://github.com/Proenca13/Project_STP'],
  },
  {
    id: 10,
    title: 'Memoryless Reactive Robot Navigation (Group Project)',
    description:
      'Purely reactive, memoryless ROS 2 robot that autonomously navigates a "5-shaped" maze using only instantaneous LiDAR data — no GPS, no map, no memory. A 3-node architecture (Radar, Decision, Movement) runs a Spatial PD wall-follower, a least squares circle detector with percentile variance filtering to identify the inner circular room, and a sinusoidal stateless wandering reflex.',
    media: 'https://github.com/Proenca13/TRI_Reactive_Robot/raw/bad26398ac055f165efb6f010d88f155f68a6a98/cover_tri.png',
    mediaType: 'image',
    category: 'robotics',
    imagePosition: 'top',
    degree: 'master',
    technologies: ['Python', 'ROS 2', 'Gazebo'],
    codeLinks: ['https://github.com/Proenca13/TRI_Reactive_Robot/tree/main/workspace/src/reactive_robot'],
  },
  {
    id: 11,
    title: 'Multi-Signal Recommendation Engine on Yelp Data (Group Project)',
    description:
      'Explored 10+ recommender architectures on a 99.88% sparse Yelp dataset - from SVD collaborative filtering and TF-IDF content-based to hybrids combining social network PageRank, SBERT embeddings, and ABSA sentiment. The final "Ultimate Ensemble" fuses 6 signals with LLM-generated explanations, achieving the best Hit Rate and MRR overall.',
    media: 'https://github.com/Proenca13/CAC_PROJECT/raw/fb8eab5490ab0157a5200e5979f8ae0089a2920c/cac_cover.png',
    mediaType: 'image',
    category: 'data science',
    degree: 'master',
    technologies: ['Python', 'Pandas', 'Surprise', 'SVD', 'TF-IDF', 'SBERT', 'NetworkX', 'Hugging Face', 'ABSA', 'PageRank', 'LLM'],
    codeLinks: ['https://github.com/Proenca13/CAC_PROJECT'],
  },
  {
    id: 6,
    title: 'Intelligent System for Industrial Equipment Failure Diagnosis (Group Project)',
    description:
      'Hybrid neuro-symbolic system that diagnoses CNC spindle failures and recommends maintenance actions. A Bayesian Network infers the most likely root cause from sensor data using the EM algorithm for latent variable learning. A Knowledge Graph then maps those causes to ranked maintenance procedures considering cost, effort, and risk. Produces fully explainable 3-level decisions: continue, monitor, or stop for maintenance.',
    media: 'https://github.com/Proenca13/TSI_Project/raw/746d8a5a90cfb2116084635b81fe5acbd15df774/cover_tsi.png', 
    mediaType: 'image',
    category: 'AI',
    degree: 'master',
    technologies: ['Python', 'Bayesian Networks', 'Knowledge Graph', 'OWL Ontology', 'SPARQL', 'EM Algorithm', 'pgmpy'],
    codeLinks: ['https://github.com/Proenca13/TSI_Project'],
  },
  {
    id: 12,
    title: 'Pool Ball Analysis: Classical CV, CNNs & Object Detection (Group Project)',
    description:
      'Three-task Computer Vision project on 8-ball pool images. Task 1 (classical CV only): color-based ball number classification, bounding box detection, and perspective homography for a top-view, no deep learning allowed. Task 2: CNN-based model to count balls on the table. Task 3: YOLO/DETR object detection for ball localization, plus image retrieval to find the most similar table from training data.',
    media: 'https://github.com/joanapimenta27/CV_project2/raw/main/cv_preview.png',
    mediaType: 'image',
    imagePosition: 'top',
    category: 'computer vision',
    degree: 'master',
    technologies: ['Python', 'OpenCV', 'PyTorch', 'YOLO', 'CNN', 'Color Segmentation', 'Image Retrieval'],
    codeLinks: ['https://github.com/Proenca13/CV_PROJECT_1', 'https://github.com/joanapimenta27/CV_project2'],
  },
  {
    id: 13,
    title: 'NLP Text Classification: Classical ML to Transformers (Group Project)',
    description:
      'Two-part NLP assignment on synthetic topic classification. Part 1: full classical pipeline - EDA, TF-IDF and word embedding features, and comparison of Naive Bayes, Logistic Regression, SVM, Random Forest, MLP, and XGBoost with error analysis. Part 2: fine-tuned a Hugging Face transformer on the same task and compared results against the classical baselines.',
    media: 'https://github.com/Proenca13/NLP_Project_1/raw/35b1973bc7311f7a35e6144e63baa0838ec11838/cover_nlp.png',
    mediaType: 'image',
    category: 'NLP',
    degree: 'master',
    technologies: ['Python', 'Hugging Face', 'Transformers', 'TF-IDF', 'Word Embeddings', 'scikit-learn', 'XGBoost', 'NLTK', 'Fine-tuning'],
    codeLinks: ['https://github.com/Proenca13/NLP_Project_1','https://github.com/Proenca13/NLP_Project_2'],
  },
];

export const projectsData: Project[] = [...bachelorProjects, ...masterProjects];