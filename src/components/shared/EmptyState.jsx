import { Link } from "react-router";

const EmptyState = ({
  icon: Icon,
  title = "No Data Found",
  description = "There is nothing to show here right now.",
  primaryAction,
  secondaryAction,
}) => {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 bg-base-100 rounded-[2rem] border-2 border-dashed border-base-300 transition-all">

      {/* Icon */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />
        <div className="relative bg-green-50 p-6 rounded-full border border-green-100 shadow-inner">
          {Icon && <Icon className="size-16 text-green-600 animate-pulse" />}
        </div>
      </div>

      {/* Text */}
      <div className="text-center max-w-sm space-y-2">
        <h3 className="text-2xl font-black text-base-content tracking-tight">
          {title}
        </h3>
        <p className="text-base-content/60 font-medium">
          {description}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-3">
        {primaryAction && (
          <Link
            to={primaryAction.to}
            className="btn btn-primary btn-md rounded-2xl px-8 shadow-lg shadow-green-500/20 normal-case"
          >
            {primaryAction.label}
          </Link>
        )}

        {secondaryAction && (
          <Link
            to={secondaryAction.to}
            className="btn btn-ghost bg-base-200/50 hover:bg-base-200 rounded-2xl px-6 normal-case"
          >
            {secondaryAction.label}
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
