const { Schema, model } = require( 'mongoose' );

// Create Schema
const SubscribersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
      type: String,
      require: true
  },
  subscribed: {
      type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Subscribers = model('subscribers', SubscribersSchema);

export default Subscribers;
