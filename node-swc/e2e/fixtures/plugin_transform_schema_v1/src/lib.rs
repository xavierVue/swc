use swc_plugin::{ast::*, plugin_transform, syntax_pos::DUMMY_SP, TransformPluginProgramMetadata};

struct ConsoleOutputReplacer;

impl VisitMut for ConsoleOutputReplacer {
    fn visit_mut_call_expr(&mut self, call: &mut CallExpr) {
        if let Callee::Expr(expr) = &call.callee {
            if let Expr::Member(MemberExpr { obj, .. }) = &**expr {
                if let Expr::Ident(ident) = &**obj {
                    if ident.sym == *"console" {
                        call.args[0].expr = Box::new(Expr::Lit(Lit::Str(Str {
                            span: DUMMY_SP,
                            value: JsWord::from("plugin_transform_schema_v1"),
                            raw: Some(JsWord::from("\"plugin_transform_schema_v1\"")),
                        })));
                    }
                }
            }
        }
    }
}

#[plugin_transform]
pub fn process(program: Program, _metadata: TransformPluginProgramMetadata) -> Program {
    // Ensure this plugin uses v1 AST struct schema, by compile-time validating
    // it doesn't have new enum for the testing purpose.
    match &program {
        Program::Script(_script) => {}
        Program::Module(_module) => {}
    }

    program.fold_with(&mut as_folder(ConsoleOutputReplacer))
}
