import examinationsDb from '../data/db.json';

const findAllExaminations = function () {
    console.log("findAllExaminations | retrieving alla examinations data");

    try {
        return examinationsDb;
    } catch (e) {
        throw Error(`Error while getting full examinations list: ${e.message}`)
    }
}

const findExamination = function (id:number) {
    console.log("findExamination | retrieving specific exam: ", id);

    try {
        let exam = examinationsDb.find(element => element.id == id);
        return exam;
    } catch (e) {
        throw Error(`Error while getting examination(${id}): ${e.message}`)
    }
}

const examinationsStats = function () {
    console.log("examinationsStats | examinations stats required");

    try {
        const distinctLocationIds:number[] = [...new Set(examinationsDb.map(element => element.locationId))];
        const statsResult: { locationId: number; pending: number; positive: number; negative: number; }[] = [];
        distinctLocationIds.forEach(locationId => {
            const examsByLocation = examinationsDb.filter(element => element.locationId == locationId);
            const pendingStats = examsByLocation.filter(element => element.result == "pending").length;
            const positiveStats = examsByLocation.filter(element => element.result == "positive").length;
            const locationStats = {
                locationId: locationId,
                pending: pendingStats,
                positive: positiveStats,
                negative: examsByLocation.length - (pendingStats + positiveStats)
            }

            statsResult.push(locationStats);
        });

        return statsResult;
    } catch (e) {
        throw Error(`Error while aggregating stats: ${e.message}`)
    }
}

export default { findAllExaminations, findExamination, examinationsStats };

