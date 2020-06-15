import { setVariableValue, saveSchedule, deleteSchedule } from "../socket";

export default {
  setVariableValue(_context, payload) {
    setVariableValue(payload);
  },
  saveSchedule(_context, schedule) {
    saveSchedule(schedule);
  },
  deleteSchedule(_context, id) {
    deleteSchedule(id);
  }
};
