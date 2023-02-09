import {
  createClient,
  dedupExchange,
  errorExchange,
  fetchExchange,
} from "@urql/core";
import type { TypedDocumentNode } from "@urql/core";

export class Urql {
  private static client = createClient({
    url: process.env.NEXT_PUBLIC_GQL_ENDPOINT,
    exchanges: [
      dedupExchange,
      errorExchange({
        onError(error) {
          if (error instanceof Error) console.error(error.message);
        },
      }),
      fetchExchange,
    ],

    fetchOptions: () => {
      const token = localStorage.getItem("accessToken");
      return {
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    },
  });

  public static query = async (
    query: TypedDocumentNode<any, object>,
    variables?: Record<string, string | string[] | unknown>
  ) => {
    try {
      const response = await Urql.client.query(query, variables).toPromise();
      return response;
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  public static mutation = async (
    mutation: TypedDocumentNode<any, object>,
    variables?: Record<string, string | string[] | unknown>
  ) => {
    try {
      const response = await Urql.client
        .mutation(mutation, variables)
        .toPromise();
      return response;
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };
}
