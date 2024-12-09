import type { GraphAI, GraphData } from "./index";
import { NodeDataParams, ResultData, DataSource, ComputedNodeData, StaticNodeData, NodeState } from "./type";
import { TransactionLog } from "./transaction_log";
export declare class Node {
    readonly nodeId: string;
    readonly waitlist: Set<string>;
    state: NodeState;
    result: ResultData | undefined;
    protected graph: GraphAI;
    protected log: TransactionLog;
    protected console: Record<string, string | boolean>;
    constructor(nodeId: string, graph: GraphAI);
    asString(): string;
    protected onSetResult(): void;
    protected afterConsoleLog(result: ResultData): void;
}
export declare class ComputedNode extends Node {
    readonly graphId: string;
    readonly isResult: boolean;
    readonly params: NodeDataParams;
    private readonly filterParams;
    readonly nestedGraph?: GraphData | DataSource;
    readonly retryLimit: number;
    retryCount: number;
    private readonly agentId?;
    private readonly agentFunction?;
    readonly timeout?: number;
    readonly priority: number;
    error?: Error;
    transactionId: undefined | number;
    private readonly passThrough?;
    readonly anyInput: boolean;
    dataSources: DataSource[];
    private inputs?;
    pendings: Set<string>;
    private ifSource?;
    private unlessSource?;
    readonly isStaticNode = false;
    readonly isComputedNode = true;
    constructor(graphId: string, nodeId: string, data: ComputedNodeData, graph: GraphAI);
    getAgentId(): string;
    private addPendingNode;
    isReadyNode(): boolean;
    private retry;
    private checkDataAvailability;
    beforeAddTask(): void;
    removePending(nodeId: string): void;
    private isCurrentTransaction;
    private executeTimeout;
    private shouldApplyAgentFilter;
    private agentFilterHandler;
    execute(): Promise<void>;
    private prepareExecute;
    private errorProcess;
    private getContext;
    private getResult;
    private getDebugInfo;
    private beforeConsoleLog;
}
export declare class StaticNode extends Node {
    value?: ResultData;
    readonly update?: DataSource;
    readonly isResult: boolean;
    readonly isStaticNode = true;
    readonly isComputedNode = false;
    constructor(nodeId: string, data: StaticNodeData, graph: GraphAI);
    injectValue(value: ResultData, injectFrom?: string): void;
    consoleLog(): void;
}
export type GraphNodes = Record<string, ComputedNode | StaticNode>;
