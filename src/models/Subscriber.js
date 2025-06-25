import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Email inválido'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  source: {
    type: String,
    default: 'website',
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

// Evitar duplicados
subscriberSchema.index({ email: 1 }, { unique: true });

export default mongoose.models.Subscriber || mongoose.model('Subscriber', subscriberSchema);