import { connectMongoDB } from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import User from "../../../../models/user";

export async function POST(req: any) {
  try {
    console.log("in function");
    const {
      email,
      firstName,
      lastName,
      birthday,
      telegramNick,
      linkedinLink,
      country,
    } = await req.json();
    await connectMongoDB();
    console.log("Mongo DB connected");
    console.log(firstName);
    console.log(email);
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find the user by email
      {
        _firstName: firstName,
        _lastName: lastName,
        _birthday: birthday,
        _telegramNick: telegramNick,
        _linkedinLink: linkedinLink,
        _country: country,
      }, // Use $set to update email and country
      { new: true } // Return the updated document
    );
    console.log(updatedUser);
    console.log(email);
    if (!updatedUser) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    console.log(updatedUser);

    return NextResponse.json(
      { message: "User updated successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
