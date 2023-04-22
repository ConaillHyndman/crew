const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        clubName: {
            type: String,
            required: [true, "Please enter the club name"]
        },
        memberName: {
            type: String,
            required: [true, "Please enter the crew name"]
        },
        ageGroup: {
            type: Number,
            required: [true, "Please enter the age group"]
        },
        crewType: {
            type: String,
            required: [true, "Please enter the crew type"]
        }
    },
    {
        timestamps: true
    }
)

const ClubMember = mongoose.model('ClubMember', productSchema);

module.exports = ClubMember;