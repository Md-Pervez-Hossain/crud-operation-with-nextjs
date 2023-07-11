import { Schema, model, models } from "mongoose";

const topicsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const Topic = models.Topic || model("Topic", topicsSchema);
export default Topic;
