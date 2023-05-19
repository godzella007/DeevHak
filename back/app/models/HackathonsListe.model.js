  module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Nom: String,
        Prenom: String,
        NumTel: Number,
        Genre: String,
        Nationalite: String
      },
      { timestamps: true }
    );
    
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
  
    const hackathonsListe = mongoose.model("hackathonsListe", schema);
    return hackathonsListe;
  };