import ts from 'typescript';

interface IInput {
    language: Languages;
    async: boolean;
}
interface IParameterType {
    name: string;
    type: string;
    isOptional: boolean;
    initializer?: string;
}
interface IMethodType {
    async: boolean;
    name: string;
    returnType: string;
    parameters: IParameterType[];
}
interface IFileImport {
    name: string;
    path: string;
    isDefault: boolean;
}
interface IFileExport {
    name: string;
    isDefault: boolean;
}
interface ITranspiledFile {
    content: string;
    imports: IFileImport[];
    exports: IFileExport[];
    methodsTypes?: IMethodType[];
}
declare enum Languages {
    Python = 0,
    Php = 1,
    CSharp = 2
}
declare enum TranspilationMode {
    ByPath = 0,
    ByContent = 1
}

declare class BaseTranspiler {
    NUM_LINES_BETWEEN_CLASS_MEMBERS: number;
    LINES_BETWEEN_FILE_MEMBERS: number;
    NUM_LINES_END_FILE: number;
    SPACE_DEFAULT_PARAM: string;
    BLOCK_OPENING_TOKEN: string;
    BLOCK_CLOSING_TOKEN: string;
    SPACE_BEFORE_BLOCK_OPENING: string;
    CONDITION_OPENING: string;
    CONDITION_CLOSE: string;
    DEFAULT_IDENTATION: string;
    STRING_QUOTE_TOKEN: string;
    UNDEFINED_TOKEN: string;
    NULL_TOKEN: string;
    IF_TOKEN: string;
    ELSE_TOKEN: string;
    ELSEIF_TOKEN: string;
    THIS_TOKEN: string;
    SLASH_TOKEN: string;
    ASTERISK_TOKEN: string;
    PLUS_TOKEN: string;
    MINUS_TOKEN: string;
    EQUALS_TOKEN: string;
    EQUALS_EQUALS_TOKEN: string;
    EXCLAMATION_EQUALS_TOKEN: string;
    EXCLAMATION_EQUALS_EQUALS_TOKEN: string;
    EQUALS_EQUALS_EQUALS_TOKEN: string;
    AMPERSTAND_APERSAND_TOKEN: string;
    PLUS_EQUALS: string;
    BAR_BAR_TOKEN: string;
    PERCENT_TOKEN: string;
    RETURN_TOKEN: string;
    OBJECT_OPENING: string;
    OBJECT_CLOSING: string;
    LEFT_PARENTHESIS: string;
    RIGHT_PARENTHESIS: string;
    ARRAY_OPENING_TOKEN: string;
    ARRAY_CLOSING_TOKEN: string;
    TRUE_KEYWORD: string;
    FALSE_KEYWORD: string;
    NEW_CORRESPODENT: string;
    THROW_TOKEN: string;
    AWAIT_TOKEN: string;
    STATIC_TOKEN: string;
    CONTINUE_TOKEN: string;
    EXTENDS_TOKEN: string;
    NOT_TOKEN: string;
    SUPER_TOKEN: string;
    PROPERTY_ACCESS_TOKEN: string;
    TRY_TOKEN: string;
    CATCH_TOKEN: string;
    CATCH_DECLARATION: string;
    BREAK_TOKEN: string;
    IN_TOKEN: string;
    LESS_THAN_TOKEN: string;
    GREATER_THAN_TOKEN: string;
    GREATER_THAN_EQUALS_TOKEN: string;
    LESS_THAN_EQUALS_TOKEN: string;
    PLUS_PLUS_TOKEN: string;
    MINUS_MINUS_TOKEN: string;
    CONSTRUCTOR_TOKEN: string;
    SUPER_CALL_TOKEN: string;
    WHILE_TOKEN: string;
    FOR_TOKEN: string;
    VAR_TOKEN: string;
    METHOD_DEFAULT_ACCESS: string;
    PROPERTY_ASSIGNMENT_TOKEN: string;
    PROPERTY_ASSIGNMENT_OPEN: string;
    PROPERTY_ASSIGNMENT_CLOSE: string;
    LINE_TERMINATOR: string;
    FUNCTION_TOKEN: string;
    METHOD_TOKEN: string;
    ASYNC_TOKEN: string;
    PROMISE_TYPE_KEYWORD: string;
    NEW_TOKEN: string;
    STRING_LITERAL_KEYWORD: string;
    STRING_KEYWORD: string;
    NUMBER_KEYWORD: string;
    PUBLIC_KEYWORD: string;
    PRIVATE_KEYWORD: string;
    VOID_KEYWORD: string;
    BOOLEAN_KEYWORD: string;
    ARRAY_KEYWORD: string;
    OBJECT_KEYWORD: string;
    INTEGER_KEYWORD: string;
    DEFAULT_RETURN_TYPE: string;
    DEFAULT_PARAMETER_TYPE: string;
    DEFAULT_TYPE: string;
    FALSY_WRAPPER_OPEN: string;
    FALSY_WRAPPER_CLOSE: string;
    ELEMENT_ACCESS_WRAPPER_OPEN: string;
    ELEMENT_ACCESS_WRAPPER_CLOSE: string;
    COMPARISON_WRAPPER_OPEN: string;
    COMPARISON_WRAPPER_CLOSE: string;
    UKNOWN_PROP_WRAPPER_OPEN: string;
    UNKOWN_PROP_WRAPPER_CLOSE: string;
    UKNOWN_PROP_ASYNC_WRAPPER_OPEN: string;
    UNKOWN_PROP_ASYNC_WRAPPER_CLOSE: string;
    EQUALS_EQUALS_WRAPPER_OPEN: string;
    EQUALS_EQUALS_WRAPPER_CLOSE: string;
    DIFFERENT_WRAPPER_OPEN: string;
    DIFFERENT_WRAPPER_CLOSE: string;
    GREATER_THAN_WRAPPER_OPEN: string;
    GREATER_THAN_WRAPPER_CLOSE: string;
    LESS_THAN_WRAPPER_OPEN: string;
    LESS_THAN_WRAPPER_CLOSE: string;
    GREATER_THAN_EQUALS_WRAPPER_OPEN: string;
    GREATER_THAN_EQUALS_WRAPPER_CLOSE: string;
    LESS_THAN_EQUALS_WRAPPER_OPEN: string;
    LESS_THAN_EQUALS_WRAPPER_CLOSE: string;
    DIVIDE_WRAPPER_OPEN: string;
    DIVIDE_WRAPPER_CLOSE: string;
    PLUS_WRAPPER_OPEN: string;
    PLUS_WRAPPER_CLOSE: string;
    MINUS_WRAPPER_OPEN: string;
    MINUS_WRAPPER_CLOSE: string;
    MOD_WRAPPER_OPEN: string;
    MOD_WRAPPER_CLOSE: string;
    ARRAY_LENGTH_WRAPPER_OPEN: string;
    ARRAY_LENGTH_WRAPPER_CLOSE: string;
    MULTIPLY_WRAPPER_OPEN: string;
    MULTIPLY_WRAPPER_CLOSE: string;
    INDEXOF_WRAPPER_OPEN: string;
    INDEXOF_WRAPPER_CLOSE: string;
    PARSEINT_WRAPPER_OPEN: string;
    PARSEINT_WRAPPER_CLOSE: string;
    DYNAMIC_CALL_OPEN: string;
    SPREAD_TOKEN: string;
    INFER_VAR_TYPE: boolean;
    INFER_ARG_TYPE: boolean;
    SupportedKindNames: {};
    PostFixOperators: {};
    PrefixFixOperators: {};
    FunctionDefSupportedKindNames: {};
    LeftPropertyAccessReplacements: {};
    RightPropertyAccessReplacements: {};
    FullPropertyAccessReplacements: {};
    StringLiteralReplacements: {};
    CallExpressionReplacements: {};
    ReservedKeywordsReplacements: {};
    PropertyAccessRequiresParenthesisRemoval: any[];
    VariableTypeReplacements: {};
    ArgTypeReplacements: {};
    FuncModifiers: {};
    uncamelcaseIdentifiers: any;
    asyncTranspiling: any;
    requiresReturnType: any;
    requiresParameterType: any;
    supportsFalsyOrTruthyValues: any;
    requiresCallExpressionCast: any;
    removeVariableDeclarationForFunctionExpression: any;
    includeFunctionNameInFunctionExpressionDeclaration: any;
    id: any;
    constructor(config: any);
    initOperators(): void;
    applyUserOverrides(config: any): void;
    getLineAndCharacterOfNode(node: any): [number, number];
    isComment(line: string): boolean;
    isStringType(flags: ts.TypeFlags): boolean;
    isAnyType(flags: ts.TypeFlags): boolean;
    warnIfAnyType(node: any, flags: any, variable: any, target: any): void;
    warn(node: any, target: any, message: any): void;
    isAsyncFunction(node: any): boolean;
    getMethodOverride(node: ts.Node): ts.Node;
    getIden(num: any): string;
    getBlockOpen(identation: any): string;
    getBlockClose(identation: any, chainBlock?: boolean): string;
    startsWithUpperCase(str: any): boolean;
    unCamelCaseIfNeeded(name: string): string;
    transformIdentifier(node: any, identifier: any): string;
    printIdentifier(node: any): string;
    shouldRemoveParenthesisFromCallExpression(node: any): boolean;
    printInstanceOfExpression(node: any, identation: any): string;
    getCustomOperatorIfAny(left: any, right: any, operator: any): any;
    printCustomBinaryExpressionIfAny(node: any, identation: any): any;
    printBinaryExpression(node: any, identation: any): any;
    transformPropertyAcessExpressionIfNeeded(node: any): any;
    transformPropertyAcessRightIdentifierIfNeeded(name: string): string;
    getExceptionalAccessTokenIfAny(node: any): any;
    printLengthProperty(node: any, identation: any, name?: any): any;
    printPropertyAccessExpression(node: any, identation: any): any;
    printCustomDefaultValueIfNeeded(node: any): any;
    printParameteCustomName(node: any, name: any, defaultValue?: boolean): any;
    printParameter(node: any, defaultValue?: boolean): string;
    printModifiers(node: any): any;
    transformLeadingComment(comment: any): any;
    transformTrailingComment(comment: any): any;
    printLeadingComments(node: any, identation: any): string;
    printTraillingComment(node: any, identation: any): string;
    printNodeCommentsIfAny(node: any, identation: any, parsedNode: any): string;
    getType(node: any): any;
    getTypeFromRawType(type: any): string;
    getFunctionType(node: any, async?: boolean): any;
    printFunctionBody(node: any, identation: any): string;
    printParameterType(node: any): any;
    printFunctionType(node: any): any;
    printFunctionDefinition(node: any, identation: any): string;
    transformFunctionNameIfNeeded(name: any): string;
    printFunctionDeclaration(node: any, identation: any): string;
    printMethodParameters(node: any): any;
    transformMethodNameIfNeeded(name: string): string;
    printMethodDefinition(node: any, identation: any): string;
    printMethodDeclaration(node: any, identation: any): string;
    printStringLiteral(node: any): any;
    printNumericLiteral(node: any): any;
    printArrayLiteralExpression(node: any, identation: any): string;
    printVariableDeclarationList(node: any, identation: any): string;
    printVariableStatement(node: any, identation: any): string;
    printOutOfOrderCallExpressionIfAny(node: any, identation: any): any;
    printSuperCallInsideConstructor(node: any, identation: any): string;
    isBuiltInFunctionCall(node: any): any;
    getTypesFromCallExpressionParameters(node: any): any[];
    printArgsForCallExpression(node: any, identation: any): any;
    printArrayIsArrayCall(node: any, identation: any, parsedArg?: any): any;
    printObjectKeysCall(node: any, identation: any, parsedArg?: any): any;
    printObjectValuesCall(node: any, identation: any, parsedArg?: any): any;
    printJsonParseCall(node: any, identation: any, parsedArg?: any): any;
    printJsonStringifyCall(node: any, identation: any, parsedArg?: any): any;
    printPromiseAllCall(node: any, identation: any, parsedArg?: any): any;
    printMathFloorCall(node: any, identation: any, parsedArg?: any): any;
    printMathRoundCall(node: any, identation: any, parsedArg?: any): any;
    printMathCeilCall(node: any, identation: any, parsedArg?: any): any;
    printNumberIsIntegerCall(node: any, identation: any, parsedArg?: any): any;
    printArrayPushCall(node: any, identation: any, name?: any, parsedArg?: any): any;
    printIncludesCall(node: any, identation: any, name?: any, parsedArg?: any): any;
    printIndexOfCall(node: any, identation: any, name?: any, parsedArg?: any): any;
    printStartsWithCall(node: any, identation: any, name?: any, parsedArg?: any): any;
    printEndsWithCall(node: any, identation: any, name?: any, parsedArg?: any): any;
    printPadEndCall(node: any, identation: any, name: any, parsedArg: any, parsedArg2: any): any;
    printPadStartCall(node: any, identation: any, name: any, parsedArg: any, parsedArg2: any): any;
    printTrimCall(node: any, identation: any, name?: any): any;
    printJoinCall(node: any, identation: any, name?: any, parsedArg?: any): any;
    printSplitCall(node: any, identation: any, name?: any, parsedArg?: any): any;
    printToFixedCall(node: any, identation: any, name?: any, parsedArg?: any): any;
    printSearchCall(node: any, identation: any, name?: any, parsedArg?: any): any;
    printSliceCall(node: any, identation: any, name?: any, parsedArg?: any, parsedArg2?: any): any;
    printReplaceCall(node: any, identation: any, name?: any, parsedArg?: any, parsedArg2?: any): any;
    printToStringCall(node: any, identation: any, name?: any): any;
    printToUpperCaseCall(node: any, identation: any, name?: any): any;
    printToLowerCaseCall(node: any, identation: any, name?: any): any;
    printShiftCall(node: any, identation: any, name?: any): any;
    printReverseCall(node: any, identation: any, name?: any): any;
    printPopCall(node: any, identation: any, name?: any): any;
    printAssertCall(node: any, identation: any, parsedArgs: any): string;
    printDateNowCall(node: any, identation: any): any;
    printCallExpression(node: any, identation: any): any;
    printClassBody(node: any, identation: any): string;
    printClassDefinition(node: any, identation: any): string;
    printClass(node: any, identation: any): string;
    printConstructorDeclaration(node: any, identation: any): string;
    printWhileStatement(node: any, identation: any): string;
    printForStatement(node: any, identation: any): string;
    printBreakStatement(node: any, identation: any): string;
    printPostFixUnaryExpression(node: any, identation: any): string;
    printPrefixUnaryExpression(node: any, identation: any): any;
    printObjectLiteralBody(node: any, identation: any): any;
    printObjectLiteralExpression(node: any, identation: any): string;
    printCustomRightSidePropertyAssignment(node: any, identation: any): string;
    printPropertyAssignment(node: any, identation: any): string;
    printElementAccessExpressionExceptionIfAny(node: any): any;
    printElementAccessExpression(node: any, identation: any): any;
    printCondition(node: any, identation: any): any;
    printIfStatement(node: any, identation: any): string;
    printParenthesizedExpression(node: any, identation: any): string;
    printBooleanLiteral(node: any): string;
    printTryStatement(node: any, identation: any): string;
    printNewExpression(node: any, identation: any): string;
    printThrowStatement(node: any, identation: any): string;
    printAwaitExpression(node: any, identation: any): string;
    printConditionalExpression(node: any, identation: any): string;
    printAsExpression(node: any, identation: any): string;
    getFunctionNodeFromReturn(node: any): any;
    printReturnStatement(node: any, identation: any): string;
    printArrayBindingPattern(node: any, identation: any): string;
    printBlock(node: any, identation: any, chainBlock?: boolean): string;
    printExpressionStatement(node: any, identation: any): string;
    printPropertyDeclaration(node: any, identation: any): string;
    printSpreadElement(node: any, identation: any): string;
    printNullKeyword(node: any, identation: any): string;
    printContinueStatement(node: any, identation: any): string;
    printDeleteExpression(node: any, identation: any): any;
    printNode(node: any, identation?: number): string;
    getFileESMImports(node: any): IFileImport[];
    isCJSRequireStatement(node: any): boolean;
    isCJSModuleExportsExpressionStatement(node: any): boolean;
    getCJSImports(node: any): IFileImport[];
    getFileImports(node: any): IFileImport[];
    getESMExports(node: any): IFileExport[];
    getCJSExports(node: any): IFileExport[];
    getExportDeclarations(node: any): IFileExport[];
    getFileExports(node: any): IFileExport[];
    getReturnTypeFromMethod(node: any): string;
    getParameterType(node: any): IParameterType;
    getMethodTypes(file: any): IMethodType[];
}

declare class PythonTranspiler extends BaseTranspiler {
    constructor(config?: {});
    initConfig(): void;
    printArrayIsArrayCall(node: any, identation: any, parsedArg?: any): string;
    printObjectKeysCall(node: any, identation: any, parsedArg?: any): string;
    printObjectValuesCall(node: any, identation: any, parsedArg?: any): string;
    printPromiseAllCall(node: any, identation: any, parsedArg: any): string;
    printMathFloorCall(node: any, identation: any, parsedArg?: any): string;
    printMathCeilCall(node: any, identation: any, parsedArg?: any): string;
    printNumberIsIntegerCall(node: any, identation: any, parsedArg?: any): string;
    printMathRoundCall(node: any, identation: any, parsedArg?: any): string;
    printIncludesCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printJoinCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printSplitCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printPopCall(node: any, identation: any, name?: any): string;
    printShiftCall(node: any, identation: any, name?: any): string;
    printReverseCall(node: any, identation: any, name?: any): string;
    printArrayPushCall(node: any, identation: any, name: any, parsedArg: any): string;
    printToStringCall(node: any, identation: any, name?: any): string;
    printIndexOfCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printSearchCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printStartsWithCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printEndsWithCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printPadEndCall(node: any, identation: any, name: any, parsedArg: any, parsedArg2: any): string;
    printPadStartCall(node: any, identation: any, name: any, parsedArg: any, parsedArg2: any): string;
    printTrimCall(node: any, identation: any, name?: any): string;
    printToUpperCaseCall(node: any, identation: any, name?: any): string;
    printToLowerCaseCall(node: any, identation: any, name?: any): string;
    printJsonParseCall(node: any, identation: any, parsedArg?: any): string;
    printJsonStringifyCall(node: any, identation: any, parsedArg?: any): string;
    printReplaceCall(node: any, identation: any, name?: any, parsedArg?: any, parsedArg2?: any): string;
    printElementAccessExpressionExceptionIfAny(node: any): string;
    printAssertCall(node: any, identation: any, parsedArgs: any): string;
    printDateNowCall(node: any, identation: any): string;
    printForStatement(node: any, identation: any): string;
    transformLeadingComment(comment: any): string;
    transformTrailingComment(comment: any): string;
    transformPropertyAcessExpressionIfNeeded(node: any): any;
    printClassDefinition(node: any, identation: any): string;
    printMethodParameters(node: any): any;
    printInstanceOfExpression(node: any, identation: any): string;
    handleTypeOfInsideBinaryExpression(node: any, identation: any): string;
    printCustomBinaryExpressionIfAny(node: any, identation: any): string;
    printConditionalExpression(node: any, identation: any): string;
    printDeleteExpression(node: any, identation: any): string;
    getCustomOperatorIfAny(left: any, right: any, operator: any): "is" | "is not";
}

declare class PhpTranspiler extends BaseTranspiler {
    awaitWrapper: any;
    propRequiresScopeResolutionOperator: string[];
    AWAIT_WRAPPER_OPEN: any;
    AWAIT_WRAPPER_CLOSE: any;
    ASYNC_FUNCTION_WRAPPER_OPEN: string;
    constructor(config?: {});
    printAwaitExpression(node: any, identation: any): string;
    transformIdentifier(node: any, identifier: any): any;
    getCustomOperatorIfAny(left: any, right: any, operator: any): "." | ".=";
    printLengthProperty(node: any, identation: any, name?: any): string;
    printPopCall(node: any, identation: any, name?: any): string;
    printReverseCall(node: any, identation: any, name?: any): string;
    printShiftCall(node: any, identation: any, name?: any): string;
    printToLowerCaseCall(node: any, identation: any, name?: any): string;
    printToUpperCaseCall(node: any, identation: any, name?: any): string;
    printToStringCall(node: any, identation: any, name?: any): string;
    printArrayIsArrayCall(node: any, identation: any, parsedArg?: any): string;
    printObjectKeysCall(node: any, identation: any, parsedArg?: any): string;
    printObjectValuesCall(node: any, identation: any, parsedArg?: any): string;
    printJsonParseCall(node: any, identation: any, parsedArg?: any): string;
    printJsonStringifyCall(node: any, identation: any, parsedArg?: any): string;
    printArrayPushCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printPromiseAllCall(node: any, identation: any, parsedArg?: any): string;
    printMathCeilCall(node: any, identation: any, parsedArg?: any): string;
    printNumberIsIntegerCall(node: any, identation: any, parsedArg?: any): string;
    printMathRoundCall(node: any, identation: any, parsedArg?: any): string;
    printMathFloorCall(node: any, identation: any, parsedArg?: any): string;
    printReplaceCall(node: any, identation: any, name?: any, parsedArg?: any, parsedArg2?: any): string;
    printIncludesCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printIndexOfCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printSearchCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printStartsWithCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printEndsWithCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printTrimCall(node: any, identation: any, name?: any): string;
    printJoinCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printSplitCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printPadEndCall(node: any, identation: any, name: any, parsedArg: any, parsedArg2: any): string;
    printPadStartCall(node: any, identation: any, name: any, parsedArg: any, parsedArg2: any): string;
    printDateNowCall(node: any, identation: any): string;
    printInstanceOfExpression(node: any, identation: any): string;
    printDeleteExpression(node: any, identation: any): string;
    getExceptionalAccessTokenIfAny(node: any): string;
    handleTypeOfInsideBinaryExpression(node: any, identation: any): string;
    printCustomBinaryExpressionIfAny(node: any, identation: any): string;
    printFunctionBody(node: any, identation: any): string;
    transformLeadingComment(comment: any): string;
    initConfig(): void;
}

declare class CSharpTranspiler extends BaseTranspiler {
    binaryExpressionsWrappers: any;
    constructor(config?: {});
    initConfig(): void;
    getBlockOpen(identation: any): string;
    printSuperCallInsideConstructor(node: any, identation: any): string;
    printIdentifier(node: any): string;
    printConstructorDeclaration(node: any, identation: any): string;
    printThisElementAccesssIfNeeded(node: any, identation: any): string;
    printDynamicCall(node: any, identation: any): string;
    printElementAccessExpressionExceptionIfAny(node: any): void;
    printWrappedUnknownThisProperty(node: any): string;
    printOutOfOrderCallExpressionIfAny(node: any, identation: any): string;
    handleTypeOfInsideBinaryExpression(node: any, identation: any): string;
    printCustomBinaryExpressionIfAny(node: any, identation: any): string;
    printVariableDeclarationList(node: any, identation: any): string;
    transformPropertyAcessExpressionIfNeeded(node: any): any;
    printCustomDefaultValueIfNeeded(node: any): string;
    printFunctionBody(node: any, identation: any): string;
    printInstanceOfExpression(node: any, identation: any): string;
    printAsExpression(node: any, identation: any): string;
    printArrayLiteralExpression(node: any): string;
    printMethodDefinition(node: any, identation: any): string;
    printArgsForCallExpression(node: any, identation: any): any;
    printArrayIsArrayCall(node: any, identation: any, parsedArg?: any): string;
    printObjectKeysCall(node: any, identation: any, parsedArg?: any): string;
    printObjectValuesCall(node: any, identation: any, parsedArg?: any): string;
    printJsonParseCall(node: any, identation: any, parsedArg?: any): string;
    printJsonStringifyCall(node: any, identation: any, parsedArg?: any): string;
    printPromiseAllCall(node: any, identation: any, parsedArg?: any): string;
    printMathFloorCall(node: any, identation: any, parsedArg?: any): string;
    printMathRoundCall(node: any, identation: any, parsedArg?: any): string;
    printMathCeilCall(node: any, identation: any, parsedArg?: any): string;
    printNumberIsIntegerCall(node: any, identation: any, parsedArg?: any): string;
    printArrayPushCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printIncludesCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printIndexOfCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printSearchCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printStartsWithCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printEndsWithCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printTrimCall(node: any, identation: any, name?: any): string;
    printJoinCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printSplitCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printToFixedCall(node: any, identation: any, name?: any, parsedArg?: any): string;
    printToStringCall(node: any, identation: any, name?: any): string;
    printToUpperCaseCall(node: any, identation: any, name?: any): string;
    printToLowerCaseCall(node: any, identation: any, name?: any): string;
    printShiftCall(node: any, identation: any, name?: any): string;
    printReverseCall(node: any, identation: any, name?: any): string;
    printPopCall(node: any, identation: any, name?: any): string;
    printAssertCall(node: any, identation: any, parsedArgs: any): string;
    printSliceCall(node: any, identation: any, name?: any, parsedArg?: any, parsedArg2?: any): string;
    printReplaceCall(node: any, identation: any, name?: any, parsedArg?: any, parsedArg2?: any): string;
    printPadEndCall(node: any, identation: any, name: any, parsedArg: any, parsedArg2: any): string;
    printPadStartCall(node: any, identation: any, name: any, parsedArg: any, parsedArg2: any): string;
    printDateNowCall(node: any, identation: any): string;
    printLengthProperty(node: any, identation: any, name?: any): string;
    printPostFixUnaryExpression(node: any, identation: any): string;
    printPrefixUnaryExpression(node: any, identation: any): any;
    printConditionalExpression(node: any, identation: any): string;
    printDeleteExpression(node: any, identation: any): string;
    printThrowStatement(node: any, identation: any): string;
}

declare class Transpiler {
    config: any;
    pythonTranspiler: PythonTranspiler;
    phpTranspiler: PhpTranspiler;
    csharpTranspiler: CSharpTranspiler;
    constructor(config?: {});
    setVerboseMode(verbose: boolean): void;
    createProgramInMemoryAndSetGlobals(content: any): void;
    createProgramByPathAndSetGlobals(path: any): void;
    checkFileDiagnostics(): void;
    transpile(lang: Languages, mode: TranspilationMode, file: string, sync?: boolean, setGlobals?: boolean, handleImports?: boolean): ITranspiledFile;
    transpileDifferentLanguagesGeneric(mode: TranspilationMode, input: IInput[], content: string): ITranspiledFile[];
    transpileDifferentLanguages(input: any[], content: string): ITranspiledFile[];
    transpileDifferentLanguagesByPath(input: any[], content: string): ITranspiledFile[];
    transpilePython(content: any): ITranspiledFile;
    transpilePythonByPath(path: any): ITranspiledFile;
    transpilePhp(content: any): ITranspiledFile;
    transpilePhpByPath(path: any): ITranspiledFile;
    transpileCSharp(content: any): ITranspiledFile;
    transpileCSharpByPath(path: any): ITranspiledFile;
    getFileImports(content: string): IFileImport[];
    getFileExports(content: string): IFileExport[];
    setPHPPropResolution(props: string[]): void;
    setPhpUncamelCaseIdentifiers(uncamelCase: boolean): void;
    setPythonUncamelCaseIdentifiers(uncamelCase: boolean): void;
    setPhpAsyncTranspiling(async: boolean): void;
    setPythonAsyncTranspiling(async: boolean): void;
    setPythonStringLiteralReplacements(replacements: any): void;
    convertStringToLanguageEnum(lang: string): Languages;
}

export { Transpiler, Transpiler as default };
