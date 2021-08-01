const RESULTS = {
  CVS: "Class vagina delivery",
  CS: "Cesarean section",
};

const MODEL = {
  PRIMP: {
    YES: RESULTS.CVS,
    NO: RESULTS.CVS,
  },
  "MULTI<3": {
    YES: RESULTS.CVS,
    NO: RESULTS.CVS,
  },
  AGE: {
    "16-27": RESULTS.CVS,
    "28-50": RESULTS.CVS,
  },
  GESTATION: {
    SING: RESULTS.CVS,
    MULTI: RESULTS.CS,
  },
  FETAL_LIE: {
    LONGITUDINAL: RESULTS.CVS,
    TRANVERSE: RESULTS.CS,
    OBLIQUE: RESULTS.CS,
  },
  PLACENTA_LOCATION: {
    ANTERIOR: RESULTS.CVS,
    POSTERIOR: RESULTS.CVS,
    FUNDAL: RESULTS.CVS,
  },
  FETAL: {
    CEPHALIC: RESULTS.CVS,
    BREECH: RESULTS.CS,
  },
};

export default MODEL;
