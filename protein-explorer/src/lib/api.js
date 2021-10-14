const panels = [
  { name: "Explore Cardiometabolic", color: "blue" },
  { name: "Explore Inflammation", color: "brand-green" },
  { name: "Explore Neurology", color: "pink" },
  { name: "Explore Oncology", color: "yellow" },
  { name: "Target Cardiometabolic", color: "blue" },
  { name: "Target Inflammation", color: "brand-green" },
  { name: "Target Neurology", color: "pink" },
  { name: "Target Oncology", color: "yellow" },
];

export const fetchProteins = async () => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            identifier: "O00233",
            name: "26S proteasome non-ATPase regulatory subunit 9",
            gene: "PSMD9",
            function_descriptions: [
              "Acts as a chaperone during the assembly of the 26S proteasome, " +
                "specifically of the base subcomplex of the PA700/19S regulatory " +
                "complex (RC). During the base subcomplex assembly is part of an " +
                "intermediate PSMD9:PSMC6:PSMC3 module, also known as modulator " +
                "trimer complex; PSMD9 is released during the further base assembly process",
            ],
            panels: [panels[3], panels[7]],
          },
          {
            identifier: "O60934",
            name: "Nibrin",
            gene: "NBN",
            function_descriptions: [
              "Component of the MRE11-RAD50-NBN (MRN complex) which plays a critical " +
                "role in the cellular response to DNA damage and the maintenance of chromosome " +
                "integrity. The complex is involved in double-strand break (DSB) repair, DNA " +
                "recombination, maintenance of telomere integrity, cell cycle checkpoint control " +
                "and meiosis. The complex possesses single-strand endonuclease activity and " +
                "double-strand-specific 3'-5' exonuclease activity, which are provided by MRE11. " +
                "RAD50 may be required to bind DNA ends and hold them in close proximity. NBN " +
                "modulate the DNA damage signal sensing by recruiting PI3/PI4-kinase family members " +
                "ATM, ATR, and probably DNA-PKcs to the DNA damage sites and activating their functions. " +
                "It can also recruit MRE11 and RAD50 to the proximity of DSBs by an interaction with " +
                "the histone H2AX. NBN also functions in telomere length maintenance by generating the " +
                "3' overhang which serves as a primer for telomerase dependent telomere elongation. NBN " +
                "is a major player in the control of intra-S-phase checkpoint and there is some evidence " +
                "that NBN is involved in G1 and G2 checkpoints. The roles of NBS1/MRN encompass DNA damage " +
                "sensor, signal transducer, and effector, which enable cells to maintain DNA integrity and " +
                "genomic stability. Forms a complex with RBBP8 to link DNA double-strand break sensing to " +
                "resection. Enhances AKT1 phosphorylation possibly by association with the mTORC2 complex",
            ],
            panels: [panels[1], panels[4]],
          },
          {
            identifier: "O96017",
            name: "Serine/threonine-protein kinase Chk2",
            gene: "CHEK2",
            function_descriptions: [
              "Serine/threonine-protein kinase which is required for checkpoint-mediated cell cycle arrest, " +
                "activation of DNA repair and apoptosis in response to the presence of DNA double-strand breaks. " +
                "May also negatively regulate cell cycle progression during unperturbed cell cycles. Following " +
                "activation, phosphorylates numerous effectors preferentially at the consensus sequence " +
                "[L-X-R-X-X-S/T]. Regulates cell cycle checkpoint arrest through phosphorylation of CDC25A, " +
                "CDC25B and CDC25C, inhibiting their activity. Inhibition of CDC25 phosphatase activity leads to " +
                "increased inhibitory tyrosine phosphorylation of CDK-cyclin complexes and blocks cell cycle " +
                "progression. May also phosphorylate NEK6 which is involved in G2/M cell cycle arrest. Regulates " +
                "DNA repair through phosphorylation of BRCA2, enhancing the association of RAD51 with chromatin " +
                "which promotes DNA repair by homologous recombination. Also stimulates the transcription of genes " +
                "involved in DNA repair (including BRCA2) through the phosphorylation and activation of the " +
                "transcription factor FOXM1. Regulates apoptosis through the phosphorylation of p53/TP53, MDM4 " +
                "and PML. Phosphorylation of p53/TP53 at 'Ser-20' by CHEK2 may alleviate inhibition by MDM2, " +
                "leading to accumulation of active p53/TP53. Phosphorylation of MDM4 may also reduce degradation " +
                "of p53/TP53. Also controls the transcription of pro-apoptotic genes through phosphorylation of the " +
                "transcription factor E2F1. Tumor suppressor, it may also have a DNA damage-independent function in " +
                "mitotic spindle assembly by phosphorylating BRCA1. Its absence may be a cause of the chromosomal " +
                "instability observed in some cancer cells. Promotes the CCAR2-SIRT1 association and is required " +
                "for CCAR2-mediated SIRT1 inhibition (PubMed:25361978)",
            ],
            panels: [panels[0]],
          },
          {
            identifier: "P04637",
            name: "Cellular tumor antigen p53 ",
            gene: "TP53",
            function_descriptions: [
              "Acts as a tumor suppressor in many tumor types; induces growth arrest or apoptosis depending on the " +
                "physiological circumstances and cell type. Involved in cell cycle regulation as a trans-activator " +
                "that acts to negatively regulate cell division by controlling a set of genes required for this process. " +
                "One of the activated genes is an inhibitor of cyclin-dependent kinases. Apoptosis induction seems to be " +
                "mediated either by stimulation of BAX and FAS antigen expression, or by repression of Bcl-2 expression. " +
                "Its pro-apoptotic activity is activated via its interaction with PPP1R13B/ASPP1 or TP53BP2/ASPP2 " +
                "(PubMed:12524540). However, this activity is inhibited when the interaction with PPP1R13B/ASPP1 or TP53BP2/ASPP2 " +
                "is displaced by PPP1R13L/iASPP (PubMed:12524540). In cooperation with mitochondrial PPIF is involved in " +
                "activating oxidative stress-induced necrosis; the function is largely independent of transcription. Induces " +
                "the transcription of long intergenic non-coding RNA p21 (lincRNA-p21) and lincRNA-Mkln1. LincRNA-p21 " +
                "participates in TP53-dependent transcriptional repression leading to apoptosis and seems to have an effect " +
                "on cell-cycle regulation. Implicated in Notch signaling cross-over. Prevents CDK7 kinase activity when " +
                "associated to CAK complex in response to DNA damage, thus stopping cell cycle progression. Isoform 2 enhances " +
                "the transactivation activity of isoform 1 from some but not all TP53-inducible promoters. Isoform 4 suppresses " +
                "transactivation activity and impairs growth suppression mediated by isoform 1. Isoform 7 inhibits isoform " +
                "1-mediated apoptosis. Regulates the circadian clock by repressing CLOCK-ARNTL/BMAL1-mediated transcriptional " +
                "activation of PER2 (PubMed:24051492)",
            ],
            panels: [panels[3], panels[4]],
          },
          {
            identifier: "P25786",
            name: "Proteasome subunit alpha type-1 ",
            gene: "PSMA1",
            function_descriptions: [
              "Component of the 20S core proteasome complex involved in the proteolytic degradation of most intracellular proteins. " +
                "This complex plays numerous essential roles within the cell by associating with different regulatory particles. " +
                "Associated with two 19S regulatory particles, forms the 26S proteasome and thus participates in the ATP-dependent " +
                "degradation of ubiquitinated proteins. The 26S proteasome plays a key role in the maintenance of protein homeostasis " +
                "by removing misfolded or damaged proteins that could impair cellular functions, and by removing proteins whose functions " +
                "are no longer required. Associated with the PA200 or PA28, the 20S proteasome mediates ubiquitin-independent protein " +
                "degradation. This type of proteolysis is required in several pathways including spermatogenesis (20S-PA200 complex) or " +
                "generation of a subset of MHC class I-presented antigenic peptides (20S-PA28 complex)",
            ],
            panels: [panels[3], panels[5]],
          },
          {
            identifier: "P30260",
            name: "Cell division cycle protein 27 homolog ",
            gene: "CDC27",
            function_descriptions: [
              "Component of the anaphase promoting complex/cyclosome (APC/C), a cell cycle-regulated E3 ubiquitin ligase that controls " +
                "progression through mitosis and the G1 phase of the cell cycle. The APC/C complex acts by mediating ubiquitination and " +
                "subsequent degradation of target proteins: it mainly mediates the formation of 'Lys-11'-linked polyubiquitin chains and, " +
                "to a lower extent, the formation of 'Lys-48'- and 'Lys-63'-linked polyubiquitin chains",
            ],
            panels: [panels[3], panels[7]],
          },
          {
            identifier: "Q06323",
            name: "Proteasome activator complex subunit 1 ",
            gene: "PSME1",
            function_descriptions: [
              "Implicated in immunoproteasome assembly and required for efficient antigen processing. The PA28 activator complex enhances " +
                "the generation of class I binding peptides by altering the cleavage pattern of the proteasome",
            ],
            panels: [panels[2], panels[6]],
          },
          {
            identifier: "Q9Y266",
            name: "Nuclear migration protein nudC",
            gene: "NUDC",
            function_descriptions: [
              "Plays a role in neurogenesis and neuronal migration (By similarity). Necessary for correct formation of mitotic spindles " +
                "and chromosome separation during mitosis (PubMed:12852857, PubMed:12679384, PubMed:25789526). Necessary for cytokinesis " +
                "and cell proliferation (PubMed:12852857, PubMed:12679384)",
            ],
            panels: [panels[1]],
          },
          {
            identifier: "Q9Y6D9",
            name: "Mitotic spindle assembly checkpoint protein MAD1 ",
            gene: "MAD1L1",
            function_descriptions: [
              "Component of the spindle-assembly checkpoint that prevents the onset of anaphase until all chromosomes are properly aligned " +
                "at the metaphase plate (PubMed:10049595, PubMed:20133940, PubMed:29162720). Forms a heterotetrameric complex with the closed " +
                "conformation form of MAD2L1 (C-MAD2) at unattached kinetochores during prometaphase, recruits an open conformation of " +
                "MAD2L1 (O-MAD2) and promotes the conversion of O-MAD2 to C-MAD2, which ensures mitotic checkpoint signaling (PubMed:29162720).",
              "Sequesters MAD2L1 in the cytoplasm preventing its function as an activator of the mitotic spindle assembly checkpoint (SAC) " +
                "resulting in SAC impairment and chromosomal instability in hepatocellular carcinomas",
            ],
            panels: [panels[2], panels[6]],
          },
        ]),
      2000
    )
  );
};

export const fetchError = async () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Could not get proteins"), 1000)
  );
};
