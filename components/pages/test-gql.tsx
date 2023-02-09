import { useQuery } from "urql";

const query = `
  query { post(id: 1) {
    id
    title
    body
  }
}
`;

const GraphQL = () => {
  const [result, reexecuteQuery] = useQuery({
    query: query,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return <ul>{data.post.id}</ul>;
};

export default GraphQL;
