const AnnuitySchedule = require("./lib/annuity-loan-schedule");
const BubbleLoanSchedule = require("./lib/bubble-loan-schedule");
const DifferentiatedSchedule  = require("./lib/differentiated-loan-schedule");

const mapping = {};

class LoanSchedule {

	static getLoanSchedule(scheduleType, options) {
		if (Object.prototype.hasOwnProperty.call(mapping, scheduleType)) {
			return new mapping[scheduleType](options);
		}
	}

	constructor(options) {
		this.options = options;
	}

	calculateSchedule(p) {
		if (Object.prototype.hasOwnProperty.call(mapping, p.scheduleType)) {
			return LoanSchedule.getLoanSchedule(p.scheduleType, this.options).calculateSchedule(p);
		}
	}

	calculateInterestByPeriod(p) {
		return new AnnuitySchedule(this.options).calculateInterestByPeriod(p);
	}

	calculateAnnuityPaymentAmount(p) {
		return new AnnuitySchedule(this.options).calculateAnnuityPaymentAmount(p);
	}

	calculateMaxLoanAmount(p) {
		return new AnnuitySchedule(this.options).calculateMaxLoanAmount(p);
	}
}

LoanSchedule.ANNUITY_SCHEDULE = "ANNUITY";
LoanSchedule.DIFFERENTIATED_SCHEDULE = "DIFFERENTIATED";
LoanSchedule.BUBBLE_SCHEDULE = "BUBBLE";

mapping[LoanSchedule.ANNUITY_SCHEDULE] = AnnuitySchedule;
mapping[LoanSchedule.BUBBLE_SCHEDULE] = BubbleLoanSchedule;
mapping[LoanSchedule.DIFFERENTIATED_SCHEDULE] = DifferentiatedSchedule;

module.exports = LoanSchedule;

