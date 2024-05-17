import User from '../models/User';


interface IUserRepositories {
    /**
     * Create a new user
     * @param full_name Full name of the user
     * @param email Email of the user
     * @param username Username of the user
     * @param password Password of the user
     * @param birth Birth date of the user
     * @param job Job of the user
     */
    create(full_name: string, username: string ,email: string, password: string, birth: string, job: string): Promise<void>;

    /**
     * Find a user by email
     * @param email Email of the user
     * @returns A user with the given email
     */
    findByEmail(email: string): Promise<User>;

    /**
     * List all users
     */
    list(): Promise<User[]>;

    /**
     * Update user
     */
    update(full_name: string, username: string, email: string, password: string, birth: Date, job: string): Promise<void>;

    /**
     * Delete a user
     * @param username Username of the user
     */
    delete(username: string): Promise<void>;
}

export default IUserRepositories;