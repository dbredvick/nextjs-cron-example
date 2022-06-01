import { slater } from "@slaterjs/next";
const config = {
  tasks: [
    {
      name: "helloWorld",
      schedule: "*/5 * * * *", // Every five minutes
      handler: async (event, success, failure) => {
        try {
          const results = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
          );
          const data = await results.json();
          if (results.ok) {
            return success(data);
          } else {
            return failure(data);
          }
        } catch (err) {
          return failure(err); // sends 500
        }
      },
    },
  ],
};

export default slater(config);
