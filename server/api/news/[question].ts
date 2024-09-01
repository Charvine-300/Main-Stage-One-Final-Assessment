import { News } from "~/utils/types";

export default defineEventHandler(async (event) => {
    try {
        const { question, page, pageSize } = event.context.params as Record<string, string>;
        const { newsAPIKey } = useRuntimeConfig();

        const response = await $fetch("https://newsapi.org/v2/everything", {
            params: {
                q: question,
                apiKey: newsAPIKey,
                page: page,
                pageSize: 12,
            },
        }) as News;

        return response || [];
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
});
