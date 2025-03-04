// for Array
export type GraphAIArray<Item = unknown> = { array: Array<Item> };
export type GraphAIItem<Item = unknown> = { item: Item };
export type GraphAIItems<Item = unknown> = { items: Array<Item> };

// array + item
export type GraphAIArrayWithItem<Item = unknown> = GraphAIArray<Item> & GraphAIItem<Item>;

// array + items
export type GraphAIArrayWithItems<Item = unknown> = GraphAIArray<Item> & GraphAIItems<Item>;

// array + item?
export type GraphAIArrayWithOptionalItem<Item = unknown> = GraphAIArray<Item> & Partial<GraphAIItem<Item>>;

// array + items?
export type GraphAIArrayWithOptionalItems<Item = unknown> = GraphAIArray<Item> & Partial<GraphAIItems<Item>>;

// array + item? + items?
export type GraphAIArrayWithOptionalItemAndItems<Item = unknown> = GraphAIArray<Item> & Partial<GraphAIItem<Item> & GraphAIItems<Item>>;

// array + item + items
export type GraphAIArrayWithItemAndItems<Item = unknown> = GraphAIArray<Item> & GraphAIItem<Item> & GraphAIItems<Item>;

// array? + items?
export type GraphAIWithOptionalArrayAndItem<Item = unknown> = Partial<GraphAIArray<Item> & GraphAIItem<Item>>;

// for text
export type GraphAIText = { text: string };

// for data
export type GraphAIData<Data = unknown> = { data: Data };

// for result
export type GraphAIResult<Result = unknown> = { result: Result };

// text? + data?
export type GraphAIWithOptionalTextAndData<Item = unknown> = Partial<GraphAIText & GraphAIData<Item>>;

// for result
export type GraphAIThrowError = { throwError: boolean };
export type GraphAIDebug = { debug: boolean };

// for llm
export type GraphAIMessageRole = "user" | "system" | "assistant" | "tool" | "developer";
export type GraphAIMessagePayload<Content = string> = { role: GraphAIMessageRole; content: Content | null };
export type GraphAIMessage<Content = string> = { message: GraphAIMessagePayload<Content> | null };
export type GraphAIMessages<Content = string> = { messages: Array<GraphAIMessagePayload<Content>> };
export type GraphAIToolPayload = { id: string; name: string; arguments?: unknown };
export type GraphAITool = { tool: GraphAIToolPayload };
export type GraphAIToolCalls = { tool_calls: Array<GraphAIToolPayload> };
