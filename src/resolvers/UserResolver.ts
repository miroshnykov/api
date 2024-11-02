import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../entity/User";
import * as bcrypt from "bcrypt";

@Resolver(of => User)
export class UserResolver {
  @Query(returns => [User])
  async users(): Promise<User[]> {
    return User.find();
  }

  @Query(returns => User, { nullable: true })
  async user(@Arg("id") id: number): Promise<User | null> {
    return User.findOne({ where: { id } });
  }

  @Mutation(returns => User)
  async createUser(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });
    
    await user.save();
    return user;
  }
} 